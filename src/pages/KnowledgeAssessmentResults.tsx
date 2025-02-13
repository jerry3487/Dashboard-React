import { useState } from "react";
import { FaShieldAlt, FaUserShield, FaNetworkWired, FaLaptop, FaLock } from "react-icons/fa";
import { FaShieldAlt, FaBug, FaUsersCog, FaTools } from "react-icons/fa";

const KnowledgeAssessmentResults = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const filters = [
        { name: "All Questions", icon: <FaShieldAlt className="text-white text-lg" /> },
        { name: "Vulnerability", icon: <FaBug className="text-red-400 text-lg" /> },
        { name: "SOC", icon: <FaUsersCog className="text-blue-400 text-lg" /> },
        { name: "Hardening", icon: <FaTools className="text-green-400 text-lg" /> },
    ];
    const sections = [
        {
            name: "Human Layer",
            icon: <FaUserShield className="text-blue-400 text-xl" />,
            description:
                "Pinocchie.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
        },
        {
            name: "Perimeter Security",
            icon: <FaShieldAlt className="text-green-400 text-xl" />,
            description:
                "Pinocchie.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
        },
        {
            name: "Network Security",
            icon: <FaNetworkWired className="text-yellow-400 text-xl" />,
            description:
                "Pinocchie.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
        },
        {
            name: "Endpoint Security",
            icon: <FaLaptop className="text-purple-400 text-xl" />,
            description:
                "Pinocchie.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
        },
        {
            name: "Application Security",
            icon: <FaLock className="text-red-400 text-xl" />,
            description:
                "Pinocchie.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
        },
    ];

    return (
        <div className="bg-[#0A0F1D] min-h-screen flex flex-col items-center px-6 py-6 text-white font-[Inter]">
            {/* 📌 Filter Buttons */}
            <div className="w-full max-w-5xl flex justify-center space-x-4 mt-4">
                {filters.map((filter) => (
                    <button key={filter.name} className="px-5 py-2 flex items-center space-x-2 rounded-md bg-[#1A2A5E] text-white hover:bg-[#243a76]">
                        {filter.icon}
                        <span>{filter.name}</span>
                    </button>
                ))}
            </div>
            {/* 📌 Security Sections */}
            <div className="w-full max-w-5xl mt-6 space-y-4">
                {sections.map((section, index) => (
                    <div key={index} className="bg-[#121B3D] p-4 rounded-lg border border-[#6a5acd] shadow-md">
                        {/* Section Header */}
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(section.name)}>
                            <div className="flex items-center space-x-3">
                                {section.icon}
                                <span className="text-lg font-semibold">{section.name}</span>
                            </div>
                            <div className="flex space-x-3">
                                <button className="bg-red-500 px-4 py-1 flex items-center space-x-2 rounded-md text-sm font-medium hover:bg-red-600 transition-all">
                                    <FaBug className="text-white text-lg" />
                                    <span>Vulnerability</span>
                                </button>
                                <button className="bg-orange-500 px-4 py-1 flex items-center space-x-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-all">
                                    <FaUsersCog className="text-white text-lg" />
                                    <span>SOC</span>
                                </button>
                                <button className="bg-blue-500 px-4 py-1 flex items-center space-x-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-all">
                                    <FaTools className="text-white text-lg" />
                                    <span>Hardening</span>
                                </button>                                
                                {/* Expand/Collapse Button */}
                                <button className="text-white text-lg transform transition-transform duration-300"
                                    style={{ transform: expandedSection === section.name ? "rotate(180deg)" : "rotate(0deg)" }}>
                                    ⬇️
                                </button>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedSection === section.name && (
                            <div className="mt-3">
                                {/* Badges */}
                                <div className="flex space-x-3 mb-2">
                                    <span className="bg-gray-700 px-3 py-1 rounded-md text-xs font-medium">⭐ Top 5</span>
                                    <span className="bg-gray-700 px-3 py-1 rounded-md text-xs font-medium">⚡ Enabler</span>
                                </div>
                                {/* Description */}
                                <p className="text-sm text-gray-300">{section.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default KnowledgeAssessmentResults;
