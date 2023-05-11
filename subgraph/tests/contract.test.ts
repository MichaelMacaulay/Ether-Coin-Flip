import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { endedCoinFlips } from "../generated/schema"
import { endedCoinFlips as endedCoinFlipsEvent } from "../generated/Contract/Contract"
import { handleendedCoinFlips } from "../src/contract"
import { createendedCoinFlipsEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let theCoinFlipID = BigInt.fromI32(234)
    let betStarter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let betEnder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let etherTotal = BigInt.fromI32(234)
    let newendedCoinFlipsEvent = createendedCoinFlipsEvent(
      theCoinFlipID,
      betStarter,
      betEnder,
      etherTotal
    )
    handleendedCoinFlips(newendedCoinFlipsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("endedCoinFlips created and stored", () => {
    assert.entityCount("endedCoinFlips", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "endedCoinFlips",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "theCoinFlipID",
      "234"
    )
    assert.fieldEquals(
      "endedCoinFlips",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "betStarter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "endedCoinFlips",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "betEnder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "endedCoinFlips",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "etherTotal",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
