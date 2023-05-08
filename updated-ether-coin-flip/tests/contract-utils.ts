import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  finishedCoinFlip,
  startedCoinFlip
} from "../generated/Contract/Contract"

export function createfinishedCoinFlipEvent(
  winner: Address,
  loser: Address
): finishedCoinFlip {
  let finishedCoinFlipEvent = changetype<finishedCoinFlip>(newMockEvent())

  finishedCoinFlipEvent.parameters = new Array()

  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam("loser", ethereum.Value.fromAddress(loser))
  )

  return finishedCoinFlipEvent
}

export function createstartedCoinFlipEvent(
  theCoinFlipID: BigInt,
  theBetStarter: Address,
  theStartingWager: BigInt
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

  return startedCoinFlipEvent
}
