import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import {Title} from "../../App";
import {Box, Text} from "../Home";
import {listMenu, ChaptersFromAPI} from "../LoggedIn";

export const Section = styled.div`
    padding: 20px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Search = styled.input`
    background: rgba(242, 242, 242, 0.9);
    color: rgba(30, 81, 40, 0.8);
    border: none;
    border-radius: 10px;
    margin: 1.25em 0;
    height: 2em;
    font-size: calc(10px + 1.2vmin);
    position: absolute;
    right: 30px;
    padding: 0.25em 20px;
`;

export const Sort = styled.select`
    background: rgba(78, 159, 61, 0.8);
    color: #fff;
    border: none;
    border-radius: 10px;
    margin: 1.25em;
    height: 2.5em;
    font-size: calc(10px + 1.2vmin);
    position: absolute;
    right: 290px;
    padding: 0.5em 20px;
`;

function display(itemList) {
    const boxes = itemList.map((item) =>
        <Box className="dark-green white-text">{item}</Box>
    );

    return boxes;
}

function SortFromAPI() {
    const [sort, setSort] = useState([]);

    async function getSort() {
        const response = await axios.get("http://localhost:9000/api/sorting");
        setSort(response.data);
    }

    useEffect(() => {
        getSort();
    }, [])

    return sort;
}

function chapterProcessing() {
    const chapters = ChaptersFromAPI();

    var recent = [];
    var recommended = [];

    chapters.forEach(chapter => {
        if (chapter.name != "disabled") {
            if (chapter.recent) {
                recent.push(chapter.name);
            }
            else if (chapter.recommended) {
                recommended.push(chapter.name);
            }
        }
    });

    return {recentList: recent, recommendedList: recommended};
}

// Landing Page
function Dashboard() {
    const sortOptions = SortFromAPI();
    const processedChapters = chapterProcessing();

    return (
        <>
            {/* Recently Viewed Section */}
            <Section>
                <Container>
                    <Title>Recently Viewed</Title>
                </Container>
                
                <Container>
                    {display(processedChapters.recentList)}
                </Container>
            </Section>

            {/* Recommended Section */}
            <Section>
                <Container>
                    <Title>Recommended</Title>
                    <Sort>
                        {listMenu(sortOptions, "Sort by")}
                    </Sort>

                    <Search placeholder="Search" />
                </Container>
                <Container>
                    {display(processedChapters.recommendedList)}
                </Container>
            </Section>
        </>
    );
}

export default Dashboard;