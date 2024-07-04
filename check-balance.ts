import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const publicKey = new PublicKey("GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW");

const connection = new Connection(clusterApiUrl('mainnet-beta'));

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);