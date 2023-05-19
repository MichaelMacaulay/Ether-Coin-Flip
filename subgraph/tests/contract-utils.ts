import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  FinishedCoinFlip,
  StartedCoinFlip
} from "../generated/Contract/Contract"

export function createFinishedCoinFlipEvent(
  theCoinFlipID: BigInt,
  winner: Address,
  loser: Address
): FinishedCoinFlip {
  let finishedCoinFlipEvent = changetype<FinishedCoinFlip>(newMockEvent())

  finishedCoinFlipEvent.parameters = new Array()

  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )
  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam("loser", ethereum.Value.fromAddress(loser))
  )

  return finishedCoinFlipEvent
}

export function createStartedCoinFlipEvent(
  theCoinFlipID: BigInt,
  theBetStarter: Address,
  theStartingWager: BigInt
): StartedCoinFlip {
  let startedCoinFlipEvent = changetype<StartedCoinFlip>(newMockEvent())

  startedCoinFlipEvent.parameters = new Array()

  startedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )
  startedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theBetStarter",
      ethereum.Value.fromAddress(theBetStarter)
    )
  )
  startedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theStartingWager",
      ethereum.Value.fromUnsignedBigInt(theStartingWager)
    )
  )

  return startedCoinFlipEvent
}
