import { Reducer } from "redux";

import { getPostsAction } from "types/actionTypes";
import { post } from "types/storeType";

const initialState: post[] = [];

const postReducer: Reducer<post[], getPostsAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "GET_POSTS":
			return [...state, ...action.payload];
		default:
			return [...state];
	}
};

export default postReducer;
