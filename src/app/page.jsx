import './documentation.css'

export default function IndexPage() {
	return (
		<div className="container">
			<h1 className="main-title">
				Welsh Street Exchange
			</h1>
			<h2 className="subtitle">
				Documentation
			</h2>
			{/* <img 
				src="/wolf-of-yacht-pfp.png" 
				alt="Welsh Street Exchange Logo" 
				className="centered-image"
			/> */}

			<div className="button-container">
				<a 
					href="https://welshstreet.io" 
					target="_blank" 
					rel="noopener noreferrer"
					className="btn-primary btn-welsh"
				>
					Welsh Street
				</a>
				<a 
					href="https://exchange.welshstreet.io" 
					target="_blank" 
					rel="noopener noreferrer"
					className="btn-primary btn-exchange"
				>
					Exchange
				</a>
				<a 
					href="/contracts" 
					className="btn-primary btn-documentation"
				>
					Documentation
				</a>
			</div>
			<div className="description">
				The Welsh Street Exchange is the world's first Meme Rewards Decentralized Exchange built Welsh, Bitcoin's first dog coin. It's an automated market maker (AMM) 100% dedicated to the activation and growth of the Welsh community and economy. This comprehensive documentation covers the design, architecture, contracts, tokenomics, and terms for the innovative DEX.
			</div>
		</div>
	)
}
