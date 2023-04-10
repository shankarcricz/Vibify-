import { useFetchAutoSuggestionsQuery } from "../store";
import { useState } from "react";

export const FetchSuggestion = (term) => {
    const [suggestions, setSuggestions] = useState([]);
    const {data} = useFetchAutoSuggestionsQuery(term)
    return data;
}