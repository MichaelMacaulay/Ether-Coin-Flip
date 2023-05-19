import {
  FinishedCoinFlip as FinishedCoinFlipEvent,
  StartedCoinFlip as StartedCoinFlipEvent
} from "../generated/Contract/Contract"
import { FinishedCoinFlip, StartedCoinFlip } from "../generated/schema"

export function handleFinishedCoinFlip(event: FinishedCoinFlipEvent): void {
  let entity = new FinishedCoinFlip(
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

export function handleStartedCoinFlip(event: StartedCoinFlipEvent): void {
  let entity = new StartedCoinFlip(
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
