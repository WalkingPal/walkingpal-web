import { Box, Paper, Stack, Typography } from "@mui/material";
import { bagpack, footstep2, promotion, shopping } from "assets/png";
import { Accent } from "components/Accent";
import { FC } from "react";
import { Grid } from "@mui/material";
export interface ICommuteCard {
	id: number;
	text: string;
	highlight: string;
	img: string;
	bgcolor: string;
	description: string;
}

const commuteCards: ICommuteCard[] = [
	{
		id: 0,
		text: "For",
		highlight: "shopping",
		img: shopping.src,
		bgcolor: "#8DD8D7",
		description: "Go out shopping with WalkingPal",
	},
	{
		id: 1,
		text: "For",
		highlight: "work",
		img: promotion.src,
		bgcolor: "#FFE3E3",
		description: "Go to work with WalkingPal",
	},
	{
		id: 2,
		text: "For",
		highlight: "traveling",
		img: bagpack.src,
		bgcolor: "#F8CF7D",
		description: "Travel everywhere with WalkingPal",
	},
	{
		id: 3,
		text: "Or just a",
		highlight: "walk!",
		img: footstep2.src,
		bgcolor: "#FF8282",
		description: "Go for walks anywhere with WalkingPal",
	},
];

export const ReImagineYourDailyCommute: FC = () => {
	return (
		<Box pt={9} px={8}>
			<Typography variant="h3" textAlign="center" mb={5}>
				Reimagine your daily
				<br /> <Accent>commute</Accent>
			</Typography>
			<Grid container spacing={{ lg: 3, sm: 4, xs: 5 }} justifyContent="center">
				{commuteCards.map(cc => (
					<Grid item xs={12} sm={6} lg={3} key={cc.id} width="auto">
						<CommuteCard cc={cc} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export const CommuteCard: FC<{ cc: ICommuteCard }> = ({ cc }) => {
	return (
		<Paper
			elevation={2}
			sx={{ width: "auto", borderRadius: 3, overflow: "hidden" }}
		>
			<Stack padding="14px" bgcolor={cc.bgcolor} width="100%">
				<Stack
					sx={{ height: "112px", backgroundColor: "#FFFFFF" }}
					justifyContent="center"
					alignItems="center"
					borderRadius="20px 20px 0 0"
					direction="row"
					gap="4px"
				>
					<Typography fontWeight={500}>{cc.text}</Typography>
					<Typography fontWeight={800}>{cc.highlight}</Typography>
				</Stack>
				<Stack
					height="180px"
					bgcolor={cc.bgcolor}
					justifyContent="center"
					alignItems="center"
					padding={{ xs: "24px 0", md: "24px" }}
				>
					<Box
						component="img"
						src={cc.img}
						sx={{
							aspectRatio: 1,
							width: { xs: "auto", md: "unset" },
							height: { md: "100%" },
						}}
						alt={cc.description}
					/>
				</Stack>
			</Stack>
		</Paper>
	);
};
