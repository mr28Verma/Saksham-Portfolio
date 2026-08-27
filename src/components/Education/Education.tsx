import React from "react";
import "./Education.css";

interface EducationItem {
    degree: string;
    field: string;
    institution: string;
    period: string;
    score?: string;
    current?: boolean;
}

interface CertificationItem {
    title: string;
    issuer: string;
}

export default function Education() {

    const educationData: EducationItem[] = [
        {
            degree: "Bachelor of Engineering",
            field: "Computer Science & Engineering",
            institution: "Chitkara University, Himachal Pradesh",
            period: "2023 - 2027",
            score: "CGPA: 8.47",
            current: true,
        },
        {
            degree: "Senior Secondary Education",
            field: "Class XII",
            institution: "GMSSS Sector 27, Chandigarh",
            period: "2021 - 2023",
        },
        {
            degree: "Secondary Education",
            field: "Class X",
            institution: "Ballistics Vidhyalaya, Panchkula",
            period: "2020 - 2021",
        },
    ];

    const certifications: CertificationItem[] = [
        {
            title: "JavaScript Essentials",
            issuer: "Cisco",
        },
        {
            title: "DBMS",
            issuer: "Infosys Springboard",
        },
        {
            title: "Linux",
            issuer: "Infosys Springboard",
        },
        {
            title: "Python Foundation",
            issuer: "Infosys Springboard",
        },
    ];

    return (
        <section id="education" className="education-section">

            <div className="education-container">

                <div className="education-header">

                    <span className="education-subtitle">
                        ACADEMICS & CREDENTIALS
                    </span>

                    <h2 className="education-title">
                        Education & Certifications
                    </h2>

                </div>

                <div className="timeline">

                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-card"
                        >

                            <div className="card-content">

                                <div className="card-header">

                                    <div>
                                        <h3 className="degree-title">
                                            {item.degree}
                                        </h3>

                                        <p className="field-title">
                                            {item.field}
                                        </p>
                                    </div>

                                    <span className="period-badge">
                                        {item.period}
                                    </span>

                                </div>

                                <p className="institution">
                                    {item.institution}
                                </p>

                                {item.score && (
                                    <div className="score-tag">
                                        <span>
                                            {item.score}
                                        </span>
                                    </div>
                                )}

                            </div>

                        </div>
                    ))}

                </div>

                <div className="certifications-section">

                    <h3 className="certifications-heading">
                        Certifications
                    </h3>

                    <div className="certifications-grid">

                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="cert-card"
                            >

                                <div className="cert-info">

                                    <h4 className="cert-title">
                                        {cert.title}
                                    </h4>

                                    <p className="cert-issuer">
                                        {cert.issuer}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}