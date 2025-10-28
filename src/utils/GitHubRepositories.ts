export interface GitHubRepository {
  name: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
  topics: string[];
}

export const githubRepositories: GitHubRepository[] = [
  {
    name: "ipfs-webui",
    description: "A frontend for an IPFS Kubo and IPFS Desktop",
    url: "https://github.com/ipfs/ipfs-webui",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: "1.6k",
    forks: "525",
    topics: ["react", "redux", "javascript", "ipfs", "p2p", "ipfs-gui"]
  },
  {
    name: "py-libp2p",
    description: "The Python implementation of the libp2p networking stack 🐍 [under development]",
    url: "https://github.com/libp2p/py-libp2p",
    language: "Python",
    languageColor: "#3776ab",
    stars: "1.2k",
    forks: "234",
    topics: ["python", "libp2p", "networking", "p2p", "decentralized"]
  },
  {
    name: "zk_validate",
    description: "Validation using zk proofs.",
    url: "https://github.com/AspiringDevelopers/zk_validate",
    language: "Solidity",
    languageColor: "#363636",
    stars: "89",
    forks: "23",
    topics: ["solidity", "zk-proofs", "validation", "blockchain", "cryptography"]
  },
  {
    name: "docs",
    description: "Docs for Storacha",
    url: "https://github.com/storacha/docs",
    language: "MDX",
    languageColor: "#fcb32c",
    stars: "45",
    forks: "12",
    topics: ["documentation", "mdx", "storacha", "docs", "markdown"]
  },
  {
    name: "js-libp2p",
    description: "The JavaScript Implementation of libp2p networking stack.",
    url: "https://github.com/libp2p/js-libp2p",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: "2.1k",
    forks: "456",
    topics: ["typescript", "javascript", "libp2p", "networking", "p2p"]
  }
];
