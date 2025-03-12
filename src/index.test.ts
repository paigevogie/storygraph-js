import { getCurrentlyReading } from "./index";

describe("storygraph-js", () => {
  it("getCurrentlyReading", async () => {
    const currentlyReading = await getCurrentlyReading("paigevogie");
    console.log(currentlyReading);

    expect(currentlyReading).toBeTruthy();
  });
});
