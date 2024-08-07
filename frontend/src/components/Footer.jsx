import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box style={styles.box}>
            <h1 style={styles.heading}>ShopSee</h1>
            <FooterContainer style={styles.footerContainer}>
                <Row style={styles.row}>
                    <Column style={styles.column}>
                        <Heading style={styles.headingText}>Why Choose Us</Heading>
                        <FooterLink href="#" style={styles.link}>Unrivaled Quality</FooterLink>
                        <FooterLink href="#" style={styles.link}>Exceptional Service</FooterLink>
                        <FooterLink href="#" style={styles.link}>Secure Shopping</FooterLink>
                    </Column>
                    <Column style={styles.column}>
                        <Heading style={styles.headingText}>Services</Heading>
                        <FooterLink href="#" style={styles.link}>Extensive Product Catalog</FooterLink>
                        <FooterLink href="#" style={styles.link}>Secure and Convenient Shopping</FooterLink>
                        <FooterLink href="#" style={styles.link}>Personalized Recommendations</FooterLink>
                        <FooterLink href="#" style={styles.link}>Efficient Order Fulfillment</FooterLink>
                    </Column>
                    <Column style={styles.column}>
                        <Heading style={styles.headingText}>Contact Us</Heading>
                        <FooterLink href="#" style={styles.link}>Email: support@example.com</FooterLink>
                        <FooterLink href="#" style={styles.link}>Phone: +1 (123) 456-7890</FooterLink>
                        <FooterLink href="#" style={styles.link}>123 Main Street, Suite 456, Cityville, State 78901, United States</FooterLink>
                        <FooterLink href="#" style={styles.link}>Feedback: feedback@example.com</FooterLink>
                    </Column>
                    <Column style={styles.column}>
                        <Heading style={styles.headingText}>Social Media</Heading>
                        <FooterLink href="#" style={styles.link}>
                            <FaFacebookF style={styles.icon} /> Facebook
                        </FooterLink>
                        <FooterLink href="#" style={styles.link}>
                            <FaInstagram style={styles.icon} /> Instagram
                        </FooterLink>
                        <FooterLink href="#" style={styles.link}>
                            <FaTwitter style={styles.icon} /> Twitter
                        </FooterLink>
                        <FooterLink href="#" style={styles.link}>
                            <FaYoutube style={styles.icon} /> YouTube
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};

const styles = {
    box: {
        padding: '40px 20px',
        backgroundColor: '#f8f9fa',
        color: '#333',
        borderTop: '1px solid #e0e0e0',
    },
    heading: {
        color: "#28a745",
        textAlign: "center",
        marginBottom: "30px",
    },
    footerContainer: {
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    column: {
        flex: '1 1 200px',
        margin: '10px',
        minWidth: '200px',
    },
    headingText: {
        fontSize: '18px',
        marginBottom: '15px',
        color: '#333',
    },
    link: {
        display: 'block',
        margin: '8px 0',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
    },
    linkHover: {
        color: '#0056b3',
    },
    icon: {
        marginRight: '10px',
        fontSize: '18px',
        verticalAlign: 'middle',
    },
};

export default Footer;
