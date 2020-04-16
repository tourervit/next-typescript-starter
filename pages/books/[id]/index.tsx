import { Navigation } from "../../../components/Navigation";
import { useRouter, NextRouter } from "next/router";

const BooksPage = () => {
	const router: NextRouter = useRouter();
	const { id } = router.query;
	return (
		<div>
			BooksPage
			<Navigation />
			<p>Book #{id}</p>
		</div>
	);
};
export default BooksPage;
