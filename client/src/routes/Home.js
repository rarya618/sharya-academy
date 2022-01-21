import React from "react";
import styled from 'styled-components';

import { Title } from "../App";

export const Header = styled.header`
    background: transparent;
    position: absolute;
    width: 100%;
`;

export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    float: right;
    position: absolute;
    right: 150px;
    vertical-align: middle;
`;

export const MenuItem = styled.li`
    padding: 15px;
    font-size: calc(10px + 1vmin);
`;

export const SignIn = styled.button`
    position: fixed;
    right: 30px;
    top: 30px;
    padding: 10px 20px;
    border: solid 1px;
    font-size: calc(10px + 0.8vmin);
    font-family: 'Noto Sans', sans-serif;
    border-radius: 5px;
    z-index: 1;
`;

export const Box = styled.div`
    border-radius: 10px;
    padding: 1.2em;
    min-width: 200px;
    margin: 15px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`;

export const BoxTitle = styled.h2`
    font-weight: 400;
    z-index: 1;
`;

export const Text = styled.p`
    text-align: justify;
    margin: 15px 0;
`;

export const SmallText = styled.p`
    text-align: justify;
    font-size: calc(10px + 0.6vmin);
`;

export const BoxButton = styled.button`
    padding: 10px;
    background: transparent;
    border: solid 1px;
    font-size: calc(10px + 0.6vmin);
    z-index: 1;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background: rgba(78, 159, 61, 0.8);
    color: #fff;
    border: none;
    font-size: calc(10px + 0.8vmin);
    z-index: 1;
    border-radius: 5px;
`;

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    line-spacing: 1.5;
    padding: 10px 0;
`;

const quizInfo = "Want to clear up concepts?  Or test yourself? Try our quizzes, sorted according to chapter. Or choose to do ones that have been mixed so you don’t know what chapters are they from. Try full syllabus quizzes to test your knowledge before the exams to improve your grade.";

const aboutPlatform = [
    "Sharya Academy is built around students to help them learn any time, anywhere. It serves you relevant content based on your preferences and uses your progress to serve you better content.",
    "Attack your weaknesses using detailed feedback around your mistakes and refer to relevant topics to clear your concepts.",
    "We offer a unique process of learning to develop new areas of interest in an interesting manner. We have developed content in multiple sections where you can regularly test your progress by solving problems related to your subjects.",
    "We have various Tests and Worksheets with well formatted solutions for you to get a clear understanding.",
    "Our most searched pages were of English and Hindi Literature. So we are doubling down and improving content availability for them. ",
    "We have Online Tests with which students can get to know where they are lacking."
];

const WhoWeAreList = [
    {name: "Shalini Jayaswal", position: "Co-Founder, Content and Marketing Lead"},
    {name: "Russal Arya", position: "Co-Founder, Technology and Operations Lead"}
];

const pricingList = [
    {planName: 'Free', price: 'Always ₹0', className: 'pricing-box white',
    points: ['Chapter Notes', 'NCERT Solutions', 'Exemplar Questions'], button: 'Sign Up'},
    {planName: 'Basic', price: 'From ₹599 a year', className: 'pricing-box green white-text',
    points: ['Everything in Free, plus:', 'Practice Tests', 'Worksheets'], button: 'Sign Up'},
    {planName: 'Premium', price: 'From ₹999 a year', className: 'pricing-box dark-green white-text',
    points: ['Everything in Basic, plus:', 'Auto-Graded Tests', 'Detailed Feedback'], button: 'Sign Up'}
];

const listPricing = pricingList.map((planItem) =>
    <div className={planItem.className}>
        <BoxTitle>{planItem.planName}</BoxTitle>
        <Text>{planItem.points[0]}</Text>
        <Text>{planItem.points[1]}</Text>
        <Text>{planItem.points[2]}</Text>
        <BoxTitle>{planItem.price}</BoxTitle>
        <BoxButton
        onClick={(e) => {
            e.preventDefault();
            window.location.href='/signup';
        }}>
            {planItem.button}
        </BoxButton>
    </div>
);

const Updates = [
    {label: "Individual Pricing", link: "/pricing"},
    {label: "What's Next?", link: "/future"},
    {label: "FAQs", link: "/faq"},
    {label: "Book a Demo", link: "/demo"},
    {label: "School Pricing", link: "/school-pricing"},
];

const Company = [
    {label: "About Us", link: "/about"},
    {label: "Contact", link: "/contact"},
    {label: "Terms of Service", link: "/terms-of-service"},
    {label: "Privacy Policy", link: "/privacy-policy"},
    {label: "Sitemap", link: "/sitemap"},
    {label: "Refund Policy", link: "/refund-policy"},
];

const FooterLists = [
    {title: "Updates", list: Updates},
    {title: "Company", list: Company}
]

function createList(list) {
    const listItems = list.map((listObject) =>
        <Link className="footer-text align-left" href={listObject.link}>{listObject.label}</Link>
    )

    return listItems;
}

const footerLists = FooterLists.map((footerList) => 
    <div className="footer-list">
        <h3 className="align-left">{footerList.title}</h3>
        {createList(footerList.list)}
    </div>
)

// landing page
function Landing() {
    return (
        <div className="element">
            <div className="element-inner">
                <Title>New Look. Same Affordability</Title>
                <h3>Plan available for Class 10 board prep.</h3>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/signup';
                    }}>
                    Get started
                </Button>
            </div>
        </div>
    )
}

const Element = ({title, text, color, callToAction, buttons, rightBlock}) => {
    return (
        <div className={"element " + color}>
            <div className="element-inner">
                <div className="row-container">
                    <div className="row-element">
                        <Title className="align-left">{title}</Title>
                        <Text>{text}</Text>
                        <Text>{callToAction}</Text>
                        <div className="row-container">
                            {buttons.map((button) => {
                                return <button 
                                    className={button.color + " standard-spacing"}
                                    onClick={button.onClick}>
                                    {button.text}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className="row-element">
                        {rightBlock}
                    </div>
                </div>
            </div>
        </div>
    )
}

// about platform page
function AboutPlatform() {
    return (
        <div className="element green white-text">
            <div className="element-inner">
                <Title>Our Platform</Title>
                {aboutPlatform.map((text) =>
                    <Text>{text}</Text>
                )}
            </div>
        </div>
    )
}

// profiles
function Profiles() {
    return WhoWeAreList.map((item) => {
        return (<div className="profile-item white green-text">
            <Text>{item.name}</Text>
            <Text>{item.position}</Text>
        </div>)
    })
}

// who are we section
function WhoAreWe() {
    return (
        <div className="element dark-green white-text">
            <div className="element-inner">
                <Title>Our Team</Title>
                <div className="profile-container">
                    <Profiles />
                </div>
            </div>
        </div>
    )
}

// social media section
function SocialMedia() {
    return (
        <div className="element white green-text">
            <div className="element-inner">
                <Title>Our Social Presence</Title>
                <Text>Sharya Academy is available on Facebook and Instagram.</Text>
            </div>
        </div>
    )
}

// pricing section
function PricingDisplay() {
    return (
        <div className="element">
            <div className="element-inner">
                <Title>Pricing</Title>
                <div className="pricing">
                    {listPricing}
                </div>
            </div>
        </div>
    )
}

// home page
function Home() {
    return (
        <div className="fullWidth">
            {/* Header */}
            <Header>
                <SignIn
                className="dark-green white-text"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/login';
                }}>
                    Sign in
                </SignIn>
            </Header>

            {/* Landing */}
            {/* <Landing /> */}
            <Element 
            title="New Look. Same Affordability" 
            color="" 
            callToAction="Plan available for Class 10 board prep"
            buttons={
                [
                    {color: "green white-text", text: "Get started", onClick: (e) =>  {
                        e.preventDefault();
                        window.location.href='/signup';
                    }}, 
                    {color: "dark-green white-text", text: "Book a Demo", onClick: (e) =>  {
                        e.preventDefault();
                        window.location.href='/demo';
                    }}
                ]
            } />

            <Element 
            title="Online Quizzes" 
            color="green white-text" 
            text={quizInfo} 
            callToAction="Now available for classes X and XII."
            buttons={
                [
                    {color: "white green-text", text: "Sign up", onClick: (e) =>  {
                        e.preventDefault();
                        window.location.href='/signup';
                    }}, 
                    {color: "dark-green white-text", text: "Book a Demo", onClick: (e) =>  {
                        e.preventDefault();
                        window.location.href='/demo';
                    }}
                ]
            } />

            {/* About Platform */}
            {/* <AboutPlatform /> */}
            
            {/* Who are We */}
            <WhoAreWe />
            
            {/* Pricing */}
            <PricingDisplay />

            {/* Social Presence */}
            <SocialMedia />

            <footer className="element">
                <div className="element-inner">
                    <div className="row-container outer">
                        <div className="row-container hide">
                        </div>
                        <div className="row-container">
                            {footerLists}
                        </div>
                    </div>

                    <p className="footer-text align-left">&copy; Sharya Academy. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;