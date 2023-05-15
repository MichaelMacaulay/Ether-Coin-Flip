import {
  finishedCoinFlip as finishedCoinFlipEvent,
  startedCoinfFlip as startedCoinfFlipEvent
} from "../generated/Contract/Contract"
import { finishedCoinFlip, startedCoinfFlip } from "../generated/schema"

export function handlefinishedCoinFlip(event: finishedCoinFlipEvent): void {
  let entity = new finishedCoinFlip(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theCoinFlipID = event.params.theCoinFlipID
  entity.winner = event.params.winner
  entity.loser = event.params.loser

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestartedCoinfFlip(event: startedCoinfFlipEvent): void {
  let entity = new startedCoinfFlip(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theCoinFlipID = event.params.theCoinFlipID
  entity.theBetStarter = event.params.theBetStarter
  entity.theStartingWager = event.params.theStartingWager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
