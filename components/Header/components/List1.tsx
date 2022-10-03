import {
	List,
	ListItemButton,
	ListItemText,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";
import { Dropdown } from "./Dropdown";

export const links = [
	{ name: "home", route: "/" },
	{ name: "about", route: "/about" },
	{ name: "FAQ", route: "/faq" },
	{
		name: "company",
		route: "/Company",
		subroutes: [
			{ name: "social impact", route: "/social" },
			{ name: "our team", route: "/team" },
			{ name: "careers", route: "/career" },
			{ name: "contact", route: "/contact" },
		],
	},
];

interface IList1 {
	mobile?: boolean;
}

export const List1: FC<IList1> = ({ mobile }) => {
	const router = useRouter();

	const handleClick = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		route: string,
	) => {
		e.preventDefault();
		router.push(route);
	};

	return (
		<List
			sx={
				mobile
					? {
							display: "grid",
							width: "100%",
					  }
					: {
							display: "flex",
							justifyContent: "flex-start",
							width: "unset",
					  }
			}
		>
			{links.map(({ name, route }) => {
				return (
					<ListItemButton
						key={name}
						onClick={e => handleClick(e, route)}
						sx={{ borderRadius: 1 }}
					>
						<ListItemText>
							<Typography
								variant="body2"
								sx={{
									color: router.route === route ? "primary.main" : "#828282",
									textTransform: "capitalize",
									px: 2,
								}}
							>
								<Link href={route}>{name}</Link>
								{subroutes && <Dropdown subroute={subroute} />}
							</Typography>
						</ListItemText>
					</ListItemButton>
				);
			})}
		</List>
	);
};
