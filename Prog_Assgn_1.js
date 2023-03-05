/*
Download the text file here. (Right click and select "Save As...")

This file contains all of the 100,000 integers between 1 and 100,000 (inclusive) in some order, with no integer repeated.

Your task is to compute the number of inversions in the file given, where the  row of the file indicates the  entry of an array.

Because of the large size of this array, you should implement the fast divide-and-conquer algorithm covered in the video lectures.

The numeric answer for the given input file should be typed in the space below.

So if your answer is 1198233847, then just type 1198233847 in the space provided without any spaces or commas or any other punctuation marks. You can make up to 5 attempts.

(We do not require you to submit your code, so feel free to use any programming language you want --- just type the final numeric answer in the following space.)

[TIP: before submitting, first test the correctness of your program on some small test files or your own devising. Then post your best test cases to the discussion forums to help your fellow students!]

Sol : 2407905288
*/

import React from "react";
import { getDate, getDecodedStr } from "../../utils";
import "./NewsCard.css";
import data from "./data.txt";

function NewsCard(props) {
  function getInvCount(arr) {
    let inv_count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] - "0" > arr[j] - "0") inv_count++;
      }
    }
    return inv_count;
  }

  const { item } = props;
  fetch(data)
    .then((r) => r.text())
    .then((text) => {
      let num = text.split("\n");

      let res = getInvCount(num);
      console.log("res", res);
    });
  return (
    <div className="card">
      <section className="img-section">
        <img
          className="img"
          testID="img"
          src={item?.jetpack_featured_media_url}
          alt=""
        />
      </section>

      <section className="details-section">
        <h3 className="title" testID="title">
          {item?.title?.rendered}
        </h3>
        <div className="date" testID="date">
          {getDate(item?.date)}
        </div>
        <div className="author" testID="author">
          {item?.parselyMeta["parsely-author"]}
        </div>
        <p className="excerpt" testID="excerpt">
          {getDecodedStr(item?.excerpt?.rendered)}
        </p>
        <a
          className="link"
          testID="link"
          href={item?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </section>
    </div>
  );
}

export default NewsCard;
