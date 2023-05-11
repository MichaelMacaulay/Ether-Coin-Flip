import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  endedCoinFlips,
  startedCoinFlips
} from "../generated/Contract/Contract"

export function createendedCoinFlipsEvent(
  theCoinFlipID: BigInt,
  betStarter: Address,
  betEnder: Address,
  winner: Address,
  loser: Address,
  etherTotal: BigInt
): endedCoinFlips {
  let endedCoinFlipsEvent = changetype<endedCoinFlips>(newMockEvent())

  endedCoinFlipsEvent.parameters = new Array()

  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )
  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "betStarter",
      ethereum.Value.fromAddress(betStarter)
    )
  )
  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam("betEnder", ethereum.Value.fromAddress(betEnder))
  )
  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam("loser", ethereum.Value.fromAddress(loser))
  )
  endedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "etherTotal",
      ethereum.Value.fromUnsignedBigInt(etherTotal)
    )
  )

  return endedCoinFlipsEvent
}

export function createstartedCoinFlipsEvent(
  theCoinFlipID: BigInt,
  theBetStarter: Address,
  theStartingWager: BigInt
): startedCoinFlips {
  let startedCoinFlipsEvent = changetype<startedCoinFlips>(newMockEvent())

  startedCoinFlipsEvent.parameters = new Array()

  startedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )
  startedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "theBetStarter",
      ethereum.Value.fromAddress(theBetStarter)
    )
  )
  startedCoinFlipsEvent.parameters.push(
    new ethereum.EventParam(
      "theStartingWager",
      ethereum.Value.fromUnsignedBigInt(theStartingWager)
    )
  )

  return startedCoinFlipsEvent
}
