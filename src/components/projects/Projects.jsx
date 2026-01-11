import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

// Image imports
import idsImage from './first/IDs.jpg';
import threatImage from './second/threat.jpg';
import compilerImage from './third/smartcompiler.jpg';
import scannerImage from './fourth/webapp.jpg';
import reconImage from './fifth/ReconGPT.jpg';
import bagragiImage from './bagragi/bagragi.jpg';
import neuroflowImage from '../../assets/projects/neuroflow.png';
import gomovieImage from '../../assets/projects/gomovie.png';
import trafficImage from '../../assets/projects/traffic.png';
import hackbotImage from '../../assets/projects/hackbot.png';

const projectsData = [
    {
        title: "NeuroFlow – AI Automation & Workflow Suite",
        image: neuroflowImage,
        description: [
            "Advanced platform featuring AI-driven automation and Eraser-inspired flow chart management.",
            "Integrated with an n8n-style node engine and a custom multi-agent chatbot for seamless task orchestration.",
            "Enables real-time data visualization and automated workflow triggering for enterprise-grade productivity."
        ],
        github: "https://github.com/Akarsh-2004/neuroflow"
    },
    {
        title: "HackBot – Unfiltered AI Terminal",
        image: hackbotImage,
        description: [
            "Custom-built, 'no-filter' AI tool tailored for offensive security and technical research.",
            "Features a gritty, hacker-friendly terminal interface with specialized neural prompting for exploit analysis.",
            "Provides raw technical insights without traditional LLM guardrails for advanced security professionals."
        ],
        github: "https://github.com/Akarsh-2004/hackbot"
    },
    {
        title: "ReconGPT – AI Threat Intelligence",
        image: reconImage,
        description: [
            "AI-driven OSINT automation suite for gathering, analyzing, and summarizing threat intelligence.",
            "Implemented fine-tuned BERT-based NER for IOC extraction and phishing classification.",
            "Automates complex reconnaissance workflows, significantly improving red team efficiency."
        ],
        github: "https://github.com/Akarsh-2004/ReconGPT"
    },
    {
        title: "Go-Stream – High-Performance Movie Platform",
        image: gomovieImage,
        description: [
            "Modern movie streaming ecosystem built with a high-performance Golang backend and React frontend.",
            "Utilizes MongoDB for scalable movie metadata management and integrated AI APIs for personalized recommendations.",
            "Optimized for low-latency concurrent streaming and secure content delivery."
        ],
        github: "https://github.com/Akarsh-2004/movies_recommendation"
    },
    {
        title: "SpaceTraffic – Virtual Traffic Control",
        image: trafficImage,
        description: [
            "Golang-based platform designed for managing and visualizing virtual space traffic and orbital data.",
            "Implements complex collision avoidance algorithms and real-time telemetry tracking.",
            "Features a futuristic, high-density visualization engine for orbital path management."
        ],
        github: "https://github.com/Akarsh-2004/aether"
    },
    {
        title: "BagRAGI AI Travel Partner",
        image: bagragiImage,
        description: [
            "AI travel assistant trained on vast datasets of destinations, attractions, and cultural insights.",
            "Built with React, Node.js, and MongoDB with seamless local API integrations.",
            "Provides real-time updates on travel conditions and streamlined booking workflows."
        ],
        github: "https://github.com/Akarsh-2004/BagRAGI",
        live: "https://bagragi.netlify.app/"
    },
    {
        title: "AI-Enhanced IDS for OS Security",
        image: idsImage,
        description: [
            "Real-time Intrusion Detection System (IDS) using Auditd and Linux syscalls, achieving high accuracy.",
            "Reduced false positives through advanced ML models trained on dense kernel logs.",
            "Integrated with FastAPI to power high-performance real-time threat dashboards."
        ],
        github: "https://github.com/Akarsh-2004/AI-IDS"
    },
    {
        title: "Pre-Threat Intelligence (PTI) Platform",
        image: threatImage,
        description: [
            "Comprehensive OSINT suite for threat modeling, reconnaissance, and vulnerability enumeration.",
            "Automated scanning with Nmap, WhatWeb, and WHOIS for high-efficiency reconnaissance.",
            "Tailored for advanced offensive operations and systematic target enumeration."
        ],
        github: "https://github.com/Akarsh-2004/Pre-threat-Intellegence-",
        live: "https://pre-threat-intellegence-1.onrender.com/"
    },
    {
        title: "Secure Smart Compiler",
        image: compilerImage,
        description: [
            "Context-aware compiler built with Flex and Bison to detect security flaws during the build phase.",
            "Automatically flags unsafe memory accesses and critical logic errors.",
            "Uses symbol table and control flow analysis for proactive vulnerability detection."
        ],
        github: "https://github.com/Akarsh-2004/smart-compiler"
    },
    {
        title: "Vulnerability Assessment Scanner",
        image: scannerImage,
        description: [
            "Automated Python-based scanner designed to identify common web application vulnerabilities.",
            "Supports dynamic analysis for Single Page Applications (SPAs) and REST API endpoints.",
            "Generates detailed technical reports for systematic security assessments."
        ],
        github: "https://github.com/Akarsh-2004/vulnerability-assessment"
    }
];

function Projects() {
    return (
        <section id="projects" className="projects-container">
            <h2
                className="projects-main-heading"
            >
                Featured Projects
            </h2>

            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
