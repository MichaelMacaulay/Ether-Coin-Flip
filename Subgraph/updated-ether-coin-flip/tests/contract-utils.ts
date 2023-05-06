import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  finishedCoinFlip,
  startedCoinfFlip
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

export function createstartedCoinfFlipEvent(
  theCoinFlipID: BigInt,
  theBetStarter: Address,
  theStartingWager: BigInt
): startedCoinfFlip {
  let startedCoinfFlipEvent = changetype<startedCoinfFlip>(newMockEvent())

  startedCoinfFlipEvent.parameters = new Array()

  startedCoinfFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )
  startedCoinfFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theBetStarter",
      ethereum.Value.fromAddress(theBetStarter)
    )
  )
  startedCoinfFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theStartingWager",
      ethereum.Value.fromUnsignedBigInt(theStartingWager)
    )
  )

  return startedCoinfFlipEvent
}
