import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  finishedCoinFlip,
  startedCoinFlip
} from "../generated/Contract/Contract"

export function createfinishedCoinFlipEvent(
  theCoinFlipID: BigInt,
  winner: Address,
  loser: Address,
  isFinished: boolean
): finishedCoinFlip {
  let finishedCoinFlipEvent = changetype<finishedCoinFlip>(newMockEvent())

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
  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "isFinished",
      ethereum.Value.fromBoolean(isFinished)
    )
  )

  return finishedCoinFlipEvent
}

export function createstartedCoinFlipEvent(
  theCoinFlipID: BigInt,
  theBetStarter: Address,
  theStartingWager: BigInt,
  isFinished: boolean
): startedCoinFlip {
  let startedCoinFlipEvent = changetype<startedCoinFlip>(newMockEvent())

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
  startedCoinFlipEvent.parameters.push(
    new ethereum.EventParam(
      "isFinished",
      ethereum.Value.fromBoolean(isFinished)
    )
  )

  return startedCoinFlipEvent
}
