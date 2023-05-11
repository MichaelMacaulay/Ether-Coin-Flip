import {
  endedCoinFlips as endedCoinFlipsEvent,
  startedCoinFlips as startedCoinFlipsEvent
} from "../generated/Contract/Contract"
import { endedCoinFlips, startedCoinFlips } from "../generated/schema"

export function handleendedCoinFlips(event: endedCoinFlipsEvent): void {
  let entity = new endedCoinFlips(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theCoinFlipID = event.params.theCoinFlipID
  entity.betStarter = event.params.betStarter
  entity.betEnder = event.params.betEnder
  entity.etherTotal = event.params.etherTotal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestartedCoinFlips(event: startedCoinFlipsEvent): void {
  let entity = new startedCoinFlips(
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
