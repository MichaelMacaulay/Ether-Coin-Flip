import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { FinishedCoinFlip } from "../generated/schema"
import { FinishedCoinFlip as FinishedCoinFlipEvent } from "../generated/Contract/Contract"
import { handleFinishedCoinFlip } from "../src/contract"
import { createFinishedCoinFlipEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let theCoinFlipID = BigInt.fromI32(234)
    let winner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let loser = Address.fromString("0x0000000000000000000000000000000000000001")
    let newFinishedCoinFlipEvent = createFinishedCoinFlipEvent(
      theCoinFlipID,
      winner,
      loser
    )
    handleFinishedCoinFlip(newFinishedCoinFlipEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FinishedCoinFlip created and stored", () => {
    assert.entityCount("FinishedCoinFlip", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FinishedCoinFlip",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "theCoinFlipID",
      "234"
    )
    assert.fieldEquals(
      "FinishedCoinFlip",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "winner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FinishedCoinFlip",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loser",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
