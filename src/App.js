import './App.css'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useState } from 'react'
import { gacha1 } from './gacha'
import { gacha2 } from './gacha'
import { gacha3 } from './gacha'

function App() {
	const [primos, setPrimos] = useState()
	const [fates, setFates] = useState()

	const [output1, setOutput1] = useState()
	const [data1, setData1] = useState([])
	var avg1 = data1 === [] ? 0 : data1.reduce((a, b) => a + b, 0) / data1.length

	const [output2, setOutput2] = useState({})
	const [data2, setData2] = useState([])
	const listData2 = data2.map((d) => <li key={d.fiveStars}>{d.fiveStars} / {d.fourStars} / {d.threeStars}</li>)

	const [output3, setOutput3] = useState()
	const [data3, setData3] = useState([])
	var num5Star = data3.filter(x => x === "5*").length
	var num4Star = data3.filter(x => x === "4*").length
	var num3Star = data3.filter(x => x === "3*").length

	const reset = () => {
		setOutput1()
		setData1([])
		setOutput2({})
		setData2([])
		setOutput3()
		setData3([])
	}

	const pull1 = () => {
		const { num_of_pulls_taken } = gacha1()
		setOutput1(num_of_pulls_taken)
		setData1(prev => ([...prev, num_of_pulls_taken]))
	}

	const pull2 = () => {
		const { num_of_five_stars, num_of_four_stars, num_of_three_stars } = gacha2()
		setOutput2({
			fiveStars: num_of_five_stars,
			fourStars: num_of_four_stars,
			threeStars: num_of_three_stars
		})
		setData2(prev => ([
			...prev,
			{
				fiveStars: num_of_five_stars,
				fourStars: num_of_four_stars,
				threeStars: num_of_three_stars
			}
		]))
	}

	const pull3 = () => {
		let result = gacha3()
		setOutput3(result)
		setData3(prev => ([...prev, result]))
	}

	const pull3100 = () => {
		for (let i = 0; i < 100; i++) {
			pull3()
		}
	}

	const pull31000 = () => {
		for (let i = 0; i < 1000; i++) {
			pull3()
		}
	}

	return (
		<>
			<Container>
				<h1>Wish Simulator</h1>
				<hr/>

				<section style={{height: "30px"}}></section>

				<Card variant="outlined">
					<CardContent>

					<TextField
						id="primos"
						label="No. of Primogems"
						type="number"
						value={primos}
						onChange={(e) => setPrimos(e.target.value)}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<span> </span>
					<TextField
						id="fates"
						label="No. of Fates"
						type="number"
						value={fates}
						onChange={(e) => setFates(e.target.value)}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<p style={{marginBottom: "-5px"}}>Number of Wishes: {(isNaN(primos) || isNaN(fates)) ? "" : Math.floor(primos / 160 + +fates)}</p>

					</CardContent>
				</Card>

				<section style={{height: "50px"}}></section>

				<Button 
					onClick={reset} 
					variant="outlined"
					color="secondary"
					style={{fontSize: "15px"}}
				>
					Reset All
				</Button>

				<section style={{height: "30px"}}></section>

				<Card variant="outlined">
					<CardContent>

						<Button 
							onClick={pull1} 
							variant="outlined"
							color="primary"
							style={{fontSize: "20px"}}
						>
							Pull Until 5*
						</Button>
						<p style={{marginTop: "2px", fontSize: "13px"}}>Note: 5* Pity is taken into account.</p>

						<p>№ of Pulls Taken: {output1}</p>
						<p>Average: {isNaN(avg1) ? "" : avg1}</p>

						<Accordion style={{width: "300px"}}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
							>
							<Typography>Pull History</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<p>{data1.join(', ').toString()}</p>
							</AccordionDetails>
						</Accordion>

					</CardContent>
				</Card>

				<section style={{height: "80px"}}></section>

				<Card variant="outlined">
					<CardContent>

						<Button 
							onClick={pull2} 
							variant="outlined"
							color="primary"
							style={{fontSize: "20px"}}
						>
							10× Pull
						</Button>
						<p style={{marginTop: "2px", fontSize: "13px"}}>Note: Only 4* Pity is taken into account.</p>

						<p>№ of 5*: {output2.fiveStars}</p>
						<p>№ of 4*: {output2.fourStars}</p>
						<p>№ of 3*: {output2.threeStars}</p>

						<Accordion style={{width: "300px"}}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
							>
							<Typography>Pull History (5* / 4* / 3*)</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<p>{listData2}</p>
							</AccordionDetails>
						</Accordion>

					</CardContent>
				</Card>

				<section style={{height: "80px"}}></section>

				<Card variant="outlined">
					<CardContent>

						<Button 
							onClick={pull3} 
							variant="outlined"
							color="primary"
							style={{fontSize: "20px"}}
						>
							1× Pull
						</Button>
						<p style={{marginTop: "2px", fontSize: "13px"}}>Note: No pity is taken into account.</p>

						<p>You got: {output3}</p>

						<p>№ of 5*: {num5Star}</p>
						<p>№ of 4*: {num4Star}</p>
						<p>№ of 3*: {num3Star}</p>

						<p>(to save you the pain, 
							<Button 
								onClick={pull3100} 
								variant="outlined"
								color="primary"
								style={{fontSize: "13px", marginLeft: "10px", padding: "1px"}}
							>
								100× Pull
							</Button>
							<Button 
								onClick={pull31000} 
								variant="outlined"
								color="primary"
								style={{fontSize: "13px", marginLeft: "10px", marginRight: "3px", padding: "1px"}}
							>
								1000× Pull
							</Button>
						)
						</p>

						<Accordion style={{width: "300px"}}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
							>
							<Typography>Pull History<br/>(open at your own risk)</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<p>{data3.join(', ').toString()}</p>
							</AccordionDetails>
						</Accordion>

					</CardContent>
				</Card>

				<section style={{height: "100px"}}></section>

			</Container>
		</>
	)
}

export default App;