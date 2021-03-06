import { Accounts } from '../accounts'
import { PluginDefinition } from '../plugin-definitions'
import { createGMinerBeamHashPluginDefinitions } from './gminer-beamhash'
import { createGMinerCuckooCyclePluginDefinitions } from './gminer-cuckoocycle'
import { createGMinerZHashPluginDefinitions } from './gminer-zhash'
import { createPhoenixMinerEthashPluginDefinitions } from './phoenixminer-ethash'
import { createXMRigKawPowPluginDefinitions } from './xmrig-kawpow'
import { createXMRigRandomXPluginDefinitions } from './xmrig-randomx'

export const createLinuxPluginDefinitions = (accounts: Accounts): PluginDefinition[] => [
  ...createPhoenixMinerEthashPluginDefinitions(accounts),
  ...createGMinerCuckooCyclePluginDefinitions(accounts),
  // TODO: ...createTRexKawPowPluginDefinitions(accounts),
  ...createXMRigKawPowPluginDefinitions(accounts),
  ...createGMinerBeamHashPluginDefinitions(accounts),
  ...createGMinerZHashPluginDefinitions(accounts),
  ...createXMRigRandomXPluginDefinitions(accounts),
]
