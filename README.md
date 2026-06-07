Project-
Hackerearth

import { TextField, PrimaryButton } from '@fluentui/react';

export default function Login() {
  return (
    <div style={{ padding: 50 }}>
      <h2>Adaptive Workplace OS</h2>
      <TextField label="Employee ID" />
      <TextField label="Password" type="password" />
      <PrimaryButton text="Login" onClick={() => window.location.href='/dashboard'} />
    </div>
  );
}


import { DetailsList } from '@fluentui/react';

const tasks = [
  { key: 1, name: 'Daily Task Auto-Submitted', status: '✓' },
  { key: 2, name: 'Project Feasibility Score', status: '82%' }
];

export default function Dashboard() {
  return (
    <div style={{ padding: 50 }}>
      <h2>Team Dashboard</h2>
      <DetailsList items={tasks} />
    </div>
  );
}

import { TextField, PrimaryButton } from '@fluentui/react';
import { useState } from 'react';

export default function Assistant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>AI Assistant Bot</h2>
      <TextField value={prompt} onChange={(e,v)=>setPrompt(v)} placeholder="Type your prompt..." />
      <PrimaryButton text="Submit" onClick={handleSubmit} />
      <p>{response}</p>
    </div>
  );
}

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssistantController : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] PromptRequest request)
    {
        // TODO: Integrate Azure OpenAI here
        var reply = $"AI Response to: {request.Prompt}";
        return Ok(new { reply });
    }
}

public class PromptRequest
{
    public string Prompt { get; set; }
}

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuditController : ControllerBase
{
    [HttpPost("run")]
    public IActionResult RunAudit([FromBody] AuditRequest request)
    {
        // TODO: Integrate GenAI Audit Engine
        var complianceScore = 91; 
        return Ok(new { score = complianceScore, report = "Audit Passed" });
    }
}

public class AuditRequest
{
    public string Data { get; set; }
}

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ManagementController : ControllerBase
{
    [HttpGet("analytics")]
    public IActionResult GetAnalytics()
    {
        // TODO: Pull from Azure SQL + Knowledge Repo
        return Ok(new { productivity = 94, auditPassRate = 91, ideasReceived = 4 });
    }
}


# Adaptive Workplace OS
### AI-Powered Productivity and Teamwork Reimagined

Microsoft Build AI 2026 Hackathon Submission

---

## Overview

Adaptive Workplace OS is an AI-powered workplace orchestration platform designed to unify task management, communication, meetings, audits, knowledge retrieval, and employee collaboration within a single intelligent workspace.

Modern organizations often rely on multiple disconnected tools, forcing employees to switch between applications for tasks, meetings, emails, project tracking, training, and audits. This fragmentation creates inefficiencies, information overload, and operational delays.

Adaptive Workplace OS addresses these challenges by leveraging Azure AI services to create a personalized, context-aware workplace environment that dynamically prioritizes work, automates communication, captures organizational knowledge, and assists employees through an integrated AI assistant.

---

## Problem Statement

Organizations face several productivity challenges:

- Fragmented workplace applications
- Information overload
- Manual task prioritization
- Repetitive administrative activities
- Difficult knowledge retrieval
- Meeting documentation overhead
- Manual audit and compliance processes
- Employee workload imbalance

These challenges result in reduced productivity, increased operational costs, and delayed decision-making.

---

## Solution

Adaptive Workplace OS acts as an intelligent operational layer across the employee lifecycle.

The platform:

- Prioritizes tasks automatically
- Provides AI-generated summaries
- Automates workplace communications
- Records and analyzes meetings
- Stores organizational knowledge
- Supports audit activities
- Captures employee feedback and innovation ideas
- Delivers actionable management insights

---

## Key Features

### Smart Task Prioritization

- Dynamic task ranking
- Deadline tracking
- Workload balancing
- Organizational priority alignment

### AI Communication Assistant

- Email generation
- Team coordination
- Leave requests
- Escalation management

### Meeting Intelligence Hub

- Meeting recording
- Speech transcription
- AI-generated summaries
- Action item extraction

### Enterprise Knowledge Repository

- Centralized organizational memory
- Natural language search
- Context-aware information retrieval

### Audit Intelligence Engine

- AI-assisted auditing
- Compliance recommendations
- Risk scoring
- Feedback generation

### Innovation Management

- Employee idea capture
- Trend identification
- Strategic recommendation generation

### Management Analytics

- Productivity metrics
- Workforce insights
- Audit performance monitoring
- Operational intelligence

---

## Architecture

```text
Employee Login
        │
        ▼
Microsoft Entra ID
        │
        ▼
Adaptive AI Dashboard
        │
        ▼
─────────────────────────
Task Agent
Communication Agent
Meeting Agent
Audit Agent
Knowledge Agent
Innovation Agent
─────────────────────────
        │
        ▼
Azure AI Foundry
        │
        ▼
Azure OpenAI Services
Azure AI Search
Azure AI Speech
Azure Document Intelligence
        │
        ▼
Enterprise Knowledge Repository
        │
        ▼
Management Analytics Dashboard
        │
        ▼
Continuous Learning Loop

