const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
} = require("@solana/web3.js");

const newPair = new Keypair();

const PublicKey = new PublicKey(newPair._keypair.publicKey).toString();

const secretKey = newPair._keypair.secretKey;

const getWalletBalance = async () => {
    try {
        const connection = Connection(clusterApiUrl("devnet"), "confirmed");

        const myWallet = await Keypair.fromSecretKey(secretKey);

        const walletBalance = await connection.getBalance(
            new PublicKey(myWallet.publicKey)
        );

        console.log(`=> For wallet address ${publicKey}`);
        console.log(
            `Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL}SOL`
        );
    } catch (e) {
        console.log(e);
    }
};
