import fetch from "isomorphic-unfetch";
import { Navigation } from "../../../components/Navigation";
import { useRouter, NextRouter } from "next/router";
import { NextPage, NextPageContext } from "next";

interface Book {
	title: string;
	body: string;
}

const BooksPage: NextPage<Book> = book => {
	const router: NextRouter = useRouter();
	const { id } = router.query;
	return (
		<div>
			BooksPage
			<Navigation />
			<h2 className="font-bold">Book title</h2>
			<p>{book.title}</p>
			<h2 className="font-bold">Book description</h2>
			<p>{book.body}</p>
		</div>
	);
};
BooksPage.getInitialProps = async (ctx: NextPageContext) => {
	const { id } = ctx.query;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const book = await res.json();
	return book;
};
export default BooksPage;
