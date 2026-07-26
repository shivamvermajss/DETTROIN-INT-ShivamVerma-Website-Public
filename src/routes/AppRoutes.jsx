import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';
import CBSEPoliciesPage from '../pages/CBSEPoliciesPage';
import AdmissionProcessPage from '../pages/AdmissionProcessPage';
import FeeStructurePage from '../pages/FeeStructurePage';
import ContactPage from '../pages/ContactPage';
import GenericContentPage from '../pages/GenericContentPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/cbse-policies" element={<CBSEPoliciesPage />} />
      
      {/* Managing Committee */}
      <Route 
        path="/managing-committee" 
        element={
          <GenericContentPage 
            title="School Managing Committee"
            tag="Governance & Leadership"
            subtitle="Distinguished educationists, administrators, and industry leaders guiding Pavna International School."
            contentBlocks={[
              {
                heading: "Governance Framework",
                text: "The Managing Committee of Pavna International School consists of experienced educationists, CBSE representatives, and community leaders who ensure highest academic rigor, moral integrity, and financial transparency."
              }
            ]}
          />
        } 
      />

      {/* Blog */}
      <Route 
        path="/blog" 
        element={
          <GenericContentPage 
            title="School Blog & Articles"
            tag="Insights & Campus Life"
            subtitle="Updates, achievements, pedagogical insights, and student articles from Pavna School."
            contentBlocks={[
              {
                heading: "Latest Campus Highlights",
                text: "Stay updated with our latest STEM robotics competitions, annual sports events, SEEL workshops, and academic milestones achieved by our students."
              }
            ]}
          />
        } 
      />

      {/* Academics */}
      <Route 
        path="/academics" 
        element={
          <GenericContentPage 
            title="Academic Excellence"
            tag="CBSE Curriculum & Beyond"
            subtitle="Concept-driven, futuristic education empowering students for global university admissions."
            highlights={[
              { title: "CBSE Curriculum", desc: "Robust national framework with STEM integration." },
              { title: "Smart Classrooms", desc: "Interactive digital tools and project-based learning." }
            ]}
            contentBlocks={[
              {
                heading: "Pedagogical Philosophy",
                text: "Shifting from rote learning to conceptual mastery, critical thinking, problem-solving, and experiential discovery."
              }
            ]}
          />
        } 
      />

      {/* Faculty */}
      <Route 
        path="/faculty" 
        element={
          <GenericContentPage 
            title="Our Faculty & Mentors"
            tag="World-Class Educators"
            subtitle="Highly qualified educators trained at leading national and international institutions."
            contentBlocks={[
              {
                heading: "Dedicated Mentorship",
                text: "Teachers play a vital role in shaping young lives. At Pavna, educators bring deep domain expertise, continuous professional development, and genuine passion for student growth."
              }
            ]}
          />
        } 
      />

      {/* Assessment Policy */}
      <Route 
        path="/assessment-policy" 
        element={
          <GenericContentPage 
            title="Assessment & Evaluation Policy"
            tag="Holistic Evaluation"
            subtitle="Continuous and Comprehensive Evaluation (CCE) as per CBSE norms."
            contentBlocks={[
              {
                heading: "Evaluation Principles",
                text: "We evaluate students through continuous assessments, project presentations, practical lab performance, and periodic board examinations."
              }
            ]}
          />
        } 
      />

      {/* Beyond Academics */}
      <Route 
        path="/beyond-academics" 
        element={
          <GenericContentPage 
            title="Beyond Academics"
            tag="Co-Curricular & Arts"
            subtitle="Music, dance, visual arts, debate, leadership clubs, and community service."
            contentBlocks={[
              {
                heading: "Creative & Leadership Exposure",
                text: "Education extends beyond textbooks. Students participate in Model UN, dramatics, eco-clubs, and public speaking to develop confidence."
              }
            ]}
          />
        } 
      />

      {/* AI & Robotics */}
      <Route 
        path="/ai-robotics" 
        element={
          <GenericContentPage 
            title="AI & Robotics Program"
            tag="Futuristic STEM"
            subtitle="State-of-the-art AI labs, coding workshops, and robotics innovation competitions."
            contentBlocks={[
              {
                heading: "STEM Innovation Hub",
                text: "Pavna prepares students for the future today through computational thinking, hands-on micro-controller programming, and intelligent system design."
              }
            ]}
          />
        } 
      />

      {/* Infrastructure */}
      <Route 
        path="/infrastructure" 
        element={
          <GenericContentPage 
            title="Campus Infrastructure"
            tag="35-Acre Eco-Friendly Campus"
            subtitle="Modern science labs, AI robotics lab, Olympic sports complex, and green surroundings."
            highlights={[
              { title: "Sports Complex", desc: "Cricket, football, swimming pool, basketball, tennis." },
              { title: "GPS Transport Fleet", desc: "Safe, monitored buses operating across regional routes." }
            ]}
            contentBlocks={[
              {
                heading: "State-of-the-Art Learning Spaces",
                text: "Equipped with digital smart boards, climate-controlled classrooms, extensive libraries, and advanced science and computer laboratories."
              }
            ]}
          />
        } 
      />

      {/* Hostel / Boarding */}
      <Route 
        path="/hostel" 
        element={
          <GenericContentPage 
            title="Residential Boarding Life"
            tag="Home Away From Home"
            subtitle="Full Boarding & Weekly Boarding options with nutritious dining, mentorship, and sports."
            contentBlocks={[
              {
                heading: "Nurturing Boarding Environment",
                text: "Structured routines, peer learning, evening tutorial support, and 24/7 medical and security care foster independence, discipline, and lifelong friendships."
              }
            ]}
          />
        } 
      />

      {/* Admission Routes */}
      <Route path="/admission-process" element={<AdmissionProcessPage />} />
      <Route path="/fee-structure" element={<FeeStructurePage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route 
        path="/apply-online" 
        element={
          <GenericContentPage 
            title="Apply Online Portal"
            tag="Admissions 2026-27"
            subtitle="Complete your online admission form for Pavna International School Aligarh."
            contentBlocks={[
              {
                heading: "Online Application Instructions",
                text: "Please keep parent ID proofs, student birth certificate, previous report card, and passport photographs ready for online submission."
              }
            ]}
          />
        } 
      />

      <Route 
        path="/interaction-syllabus" 
        element={
          <GenericContentPage 
            title="Interaction Syllabus"
            tag="Admission Prep"
            subtitle="Class-wise diagnostic assessment topics for upcoming academic sessions."
            contentBlocks={[
              {
                heading: "Diagnostic Syllabus Overview",
                text: "Assessments are designed to gauge basic conceptual understanding in English, Mathematics, and Science appropriate for the candidate's grade level."
              }
            ]}
          />
        } 
      />

      <Route 
        path="/enquiry" 
        element={<ContactPage />} 
      />

      <Route 
        path="/faq" 
        element={
          <GenericContentPage 
            title="Admissions & Campus FAQ"
            tag="Help & Support"
            subtitle="Find answers to all frequently asked questions regarding Pavna International School."
            contentBlocks={[
              {
                heading: "Frequently Asked Questions",
                text: "For any further queries, please reach out to our admission helpdesk at +91 8006409344 or visit our campus."
              }
            ]}
          />
        } 
      />

      {/* Fallback Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
