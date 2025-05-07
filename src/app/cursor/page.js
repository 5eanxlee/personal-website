'use client';

import { useEffect } from 'react';

export default function CursorPage() {
    // Simple fade-in animation
    useEffect(() => {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = 1;
        }, 100);
    }, []);

    // Calculate token-based revenue loss for Claude 3.7 Sonnet
    // Assumptions based on user specifications:
    const numberOfTrialAccounts = 181;
    const promptsPerAccount = 150;
    const totalPrompts = numberOfTrialAccounts * promptsPerAccount;

    // Token calculations
    // More realistic code context - average 1.2k lines of code per prompt at ~60 tokens per line
    const inputTokensPerPrompt = 1200 * 60; // 72,000 tokens per prompt for code

    // Additional context tokens (variable names, documentation, etc.)
    const additionalContextTokens = 28000; // 28k additional tokens for context

    // Total input tokens per prompt
    const totalInputTokensPerPrompt = inputTokensPerPrompt + additionalContextTokens;

    // Output tokens (typical AI response)
    const outputTokensPerPrompt = 1200;

    // Recursive prompting factor (how many times the model is called in a chain)
    const recursivePromptingFactor = 1.2; // Average of 1.2 calls per original prompt

    // Adjusted total tokens with recursive prompting
    const effectivePrompts = totalPrompts * recursivePromptingFactor;

    // Total tokens
    const totalInputTokens = effectivePrompts * totalInputTokensPerPrompt;
    const totalOutputTokens = effectivePrompts * outputTokensPerPrompt;

    // Claude 3.7 Sonnet pricing (per million tokens)
    const inputTokenPricePerMillion = 3; // $3 per million input tokens
    const outputTokenPricePerMillion = 15; // $15 per million output tokens
    const promptCachingWritePricePerMillion = 3.75; // $3.75 per million tokens for prompt caching write
    const promptCachingReadPricePerMillion = 0.30; // $0.30 per million tokens for prompt caching read

    // Caching usage estimates (assume 40% of prompts involve caching)
    const cachingUsagePercentage = 0.4;
    const cachingWriteTokens = totalInputTokens * cachingUsagePercentage;
    const cachingReadTokens = totalInputTokens * cachingUsagePercentage * 1.5; // Read cache more often than write

    // Cost calculations
    const inputTokenCost = (totalInputTokens / 1000000) * inputTokenPricePerMillion;
    const outputTokenCost = (totalOutputTokens / 1000000) * outputTokenPricePerMillion;
    const cachingWriteCost = (cachingWriteTokens / 1000000) * promptCachingWritePricePerMillion;
    const cachingReadCost = (cachingReadTokens / 1000000) * promptCachingReadPricePerMillion;
    const totalTokenCost = inputTokenCost + outputTokenCost + cachingWriteCost + cachingReadCost;

    // Format large numbers with commas
    const formatNumber = (num) => {
        return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
    };

    // Format currency
    const formatCurrency = (num) => {
        return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="main-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', minHeight: '100vh' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Inter, sans-serif', marginBottom: '30px', lineHeight: '1.6' }}>
                    Since dec. 2024, I've made over 181+ free trial emails for cursor. as of may 2025, this method is still not patched. it involes using a custom script to clear device ID's, combined with an automated system of outlook + github signups. I almost exclusively use Claude 3.7 Sonnet Thinking.
                </p>

                <h3 style={{ fontSize: '16px', color: '#333', fontFamily: 'Inter, sans-serif', marginBottom: '15px' }}>
                    Impact Calculations (Claude 3.7 Sonnet)
                </h3>

                <div style={{ fontSize: '14px', color: '#666', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                    <p>
                        <strong>Trial accounts created:</strong> {numberOfTrialAccounts}
                    </p>
                    <p>
                        <strong>Prompts per account:</strong> {promptsPerAccount}
                    </p>
                    <p>
                        <strong>Recursive prompt factor:</strong> {recursivePromptingFactor}x (chain-of-thought calls)
                    </p>
                    <p>
                        <strong>Effective total prompts:</strong> {formatNumber(effectivePrompts)}
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        <strong>Input tokens per prompt:</strong> {formatNumber(totalInputTokensPerPrompt)}
                        <span style={{ fontSize: '12px' }}> (based on 1.2k lines of code + context)</span>
                    </p>
                    <p>
                        <strong>Output tokens per prompt:</strong> {formatNumber(outputTokensPerPrompt)}
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        <strong>Total input tokens:</strong> {formatNumber(totalInputTokens)}
                        <span style={{ fontSize: '12px' }}> ({formatCurrency(inputTokenCost)} at ${inputTokenPricePerMillion}/million)</span>
                    </p>
                    <p>
                        <strong>Total output tokens:</strong> {formatNumber(totalOutputTokens)}
                        <span style={{ fontSize: '12px' }}> ({formatCurrency(outputTokenCost)} at ${outputTokenPricePerMillion}/million)</span>
                    </p>
                    <p>
                        <strong>Prompt caching write:</strong> {formatNumber(cachingWriteTokens)}
                        <span style={{ fontSize: '12px' }}> ({formatCurrency(cachingWriteCost)} at ${promptCachingWritePricePerMillion}/million)</span>
                    </p>
                    <p>
                        <strong>Prompt caching read:</strong> {formatNumber(cachingReadTokens)}
                        <span style={{ fontSize: '12px' }}> ({formatCurrency(cachingReadCost)} at ${promptCachingReadPricePerMillion}/million)</span>
                    </p>
                    <p style={{ marginTop: '15px', fontWeight: 600, fontSize: '15px' }}>
                        <strong>Total cost to Cursor:</strong> {formatCurrency(totalTokenCost)}
                    </p>
                </div>
            </div>
        </div>
    );
} 