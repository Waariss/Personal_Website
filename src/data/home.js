import { CVES } from './cves';
import { PUBLICATIONS } from './publications';

export const HOME_SUMMARY = 'Red Teaming • AI Security • Web/AppSec';

export const HOME_CREDENTIAL_ROWS = [
  ['OSCP+', 'OSCP', 'CPTS', 'CWES', 'CJCA', 'CRTP', 'BSCP', 'eWPTX'],
  ['PNPT', 'PMPA', 'PSAA', 'ASCP', 'ACP', 'PT1', 'SEC1', 'CDL', 'GHF'],
];

export const HOME_PROOF_HIGHLIGHTS = [
  { text: 'Black Hat Asia 2026 Arsenal Presenter', link: '#speaker' },
  { text: 'DEF CON SG 2026 Demo Labs', link: '#speaker' },
  { text: `${CVES.length}×CVEs`, link: '#cves' },
  { text: `${PUBLICATIONS.length}×IEEE Publications`, link: '#publications' },
];
