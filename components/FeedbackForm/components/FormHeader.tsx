import { Box, Typography } from "@mui/material";
import { ELcenter } from "assets/png";
import { Image } from "components/Image";
import { FC } from "react";

interface IFormHeader {}

export const FormHeader: FC<IFormHeader> = ({}) => {
	return (
		<>
			<Typography variant="h3" component="h2" textAlign="center" mt={13}>
				Didn’t get what you are looking for?
			</Typography>
			<Typography variant="body1" my={2} textAlign="center">
				You can contact us directly, we will be happy to answer.
			</Typography>
			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				gap={2}
				mt={5}
			>
				<Typography variant="h3">VSSUT, Burla</Typography>
				<Box display="flex" flexWrap="wrap" gap={1}>
					<Box display="grid">
						<Typography variant="subtitle1" component="h4">
							Address
						</Typography>
						<Typography variant="body2" maxWidth={170}>
							Innovation and Incubation center
						</Typography>
					</Box>
					<Box display="grid">
						<Typography variant="subtitle1" component="h4" id="contact">
							Contact
						</Typography>
						<Typography variant="body2">support@walkingpal.in</Typography>
						<Typography variant="body2">(+91) 63718 09652</Typography>
					</Box>
				</Box>
			</Box>
			<Image
				src={ELcenter}
				width={1298}
				height={655}
				wrapstyle={{ mb: 6 }}
				alt=""
			/>

			<Typography variant="h2" textAlign="center" id="help">
				Let us know who you are
			</Typography>
			<Typography variant="body1" mt={2} textAlign="center">
				Drop down your query or message and we will get back to you as soon as
				possible.
			</Typography>
		</>
	);
};
