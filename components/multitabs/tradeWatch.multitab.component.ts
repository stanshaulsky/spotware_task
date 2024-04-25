import { Page } from "@playwright/test";
import { Position } from "../../types/position";
import { BasicMultitab } from "./basic.multitab.component";

export class TradeWatchMultitab extends BasicMultitab {
  static POSITION_ID_HTML_ATTRIBUTE = "data-test-key";
  tabs: BasicMultitab;
  openPositions: Position[];

  constructor(readonly page: Page) {
    super(page);
    this.tabs = new BasicMultitab(page);
    this.openPositions = [];
  }
  public get Locators() {
    return {
      ...super.Locators,
      positions: {
        tab: "data-test-id=positions-tab",
        table: "data-test-id=trade-watch >> data-test-id=positions",
        tablePositionRows:
          "data-test-id=trade-watch >> data-test-id=positions >> data-test-id=table-row",
        counter: "data-test-id=positions-tab >> data-test-id=counter",
        newOrderBtn: "data-test-id=new-order-button  >> button",
        tableCloseBtn: "data-test-id=table-row-cell-close",
      },
    };
  }

  public async rememberPosition(positionName: string): Promise<void> {
    const currentId = await this.page
      .locator(this.Locators.positions.tablePositionRows)
      .nth(0)
      .getAttribute(TradeWatchMultitab.POSITION_ID_HTML_ATTRIBUTE);
    const position: Position = {
      name: positionName,
      id: currentId ? currentId : "unknown",
    };

    this.openPositions.push(position);
  }

  public async cancelPosition(positionName: string): Promise<void> {
    const foundPosition = this.openPositions.find(
      (position) => position.name === positionName,
    );
    await this.page.click(
      `[${TradeWatchMultitab.POSITION_ID_HTML_ATTRIBUTE}="${foundPosition?.id}"] >> ${this.Locators.positions.tableCloseBtn} `,
    );
  }
}
