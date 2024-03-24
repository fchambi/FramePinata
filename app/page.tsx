import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma1TxJo8QbeA6Mgjkg3E7owbbTsRM2Cz816DLhzasgb1Z/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Cat Web3 Comic',
  description: 'A frame telling the story of a Cat in Web3',
  openGraph: {
    title: 'Cat web 3',
    description: 'A frame telling the story of a Cat in Web3',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma1TxJo8QbeA6Mgjkg3E7owbbTsRM2Cz816DLhzasgb1Z/0.png`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01', // Ensure this line is added or updated
  },
};

export default function Page() {
  return (
    <>
      <h1>Cat Learning Web3</h1>
    </>
  );
}