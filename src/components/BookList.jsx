import React, { useEffect } from "react";
import { useGlobalContext } from "../Context.jsx";
import "../assets/styles/BookList.css";
import { Link } from "react-router-dom";
import loadingGIF from "../assets/gif/output-onlinegiftools.gif";
import bookCover from "../assets/images/BookCoverunavailable.jpg";

const BookList = () => {
	const { books, searchResult, isLoading } = useGlobalContext();

	useEffect(() => {}, [isLoading]);
	return (
		<>
			<p className={"booklist-status"}>
				{" "}
				{isLoading
					? `Fetching Data for ${searchResult}...`
					: `${searchResult}`}
			</p>

			<div className={"bookList-container"}>
				{isLoading ? (
					<img
						className={"loading-gif"}
						src={loadingGIF}
						alt="Loading Gif"
					/>
				) : (
					books.map((currentBook) => {
						return (
							<section
								className={"book-card"}
								key={currentBook.id}>
								<div className={"book-card-img-container"}>
									<img
										src={
											currentBook.cover_id
												? `https://covers.openlibrary.org/b/id/${currentBook.cover_id}-M.jpg`
												: bookCover
										}
										alt={"Image is not Available"}
									/>
								</div>

								<div className={"book-card-information"}>
									<h2>
										<b>
											{window.screen.width < 450 &&
											currentBook.title.length > 15
												? currentBook.title
														.slice(0, 12)
														.concat("...")
												: currentBook.title}
										</b>
									</h2>

									<p>
										Author:
										<span>
											{" "}
											{currentBook.author
												? currentBook.author.join(", ")
												: "N/A"}
										</span>
									</p>
									<p>
										Language:
										<span>
											{" "}
											{currentBook.language
												? currentBook.language.join(
														", "
												)
												: "N/A"}
										</span>
									</p>

									<p>
										Pages:
										<span> {currentBook.pages}</span>
									</p>

									{/*<Link className={"read-link"} to={`https://openlibrary.org/${currentBook.id}  `}>*/}
									{/*    {currentBook.available?"Read":"Not Available"}*/}
									{/*</Link>*/}

									<Link
										className={"read-link"}
										to={
											currentBook.read_link &&
											currentBook.read_link.length > 0
												? `https://archive.org/details/${currentBook.read_link[0]}/2up?view=theater`
												: "#"
										}>
										{currentBook.available
											? "Read"
											: "Not Available"}
									</Link>
								</div>
							</section>
						);
					})
				)}
			</div>
		</>
	);
};

export default BookList;
