import { StepConnector, styled, StepConnectorProps } from "@mui/material";
import { StyledComponent } from "@emotion/styled";

export const ProgressConnector: StyledComponent<StepConnectorProps> = styled(
	StepConnector,
)({
	backgroundColor: "#FFF",
	height: 2,
});
