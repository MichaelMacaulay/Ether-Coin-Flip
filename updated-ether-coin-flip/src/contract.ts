import {
  finishedCoinFlip as finishedCoinFlipEvent,
  startedCoinFlip as startedCoinFlipEvent
} from "../generated/Contract/Contract"
import { finishedCoinFlip, startedCoinFlip } from "../generated/schema"

export function handlefinishedCoinFlip(event: finishedCoinFlipEvent): void {
  let entity = new finishedCoinFlip(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theCoinFlipID = event.params.theCoinFlipID
  entity.winner = event.params.winner
  entity.loser = event.params.loser
  entity.isFinished = event.params.isFinished

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestartedCoinFlip(event: startedCoinFlipEvent): void {
  let entity = new startedCoinFlip(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theCoinFlipID = event.params.theCoinFlipID
  entity.theBetStarter = event.params.theBetStarter
  entity.theStartingWager = event.params.theStartingWager
  entity.isFinished = event.params.isFinished

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
