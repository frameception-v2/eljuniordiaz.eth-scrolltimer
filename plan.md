```markdown
### Step 1: Implement Tracking Initiation Endpoint
```text
1. Create serverless function for tracking start
2. Generate shareable URL with encoded parameters
3. Set up basic HTML response template
```

### Step 2: Build Time Check Endpoint Foundation
```text
1. Create GET endpoint for time calculation
2. Implement parameter parsing from URL
3. Add basic time difference calculation
```

### Step 3: Add Status Update Functionality
```text
1. Create POST endpoint for manual refresh
2. Implement timestamp update logic
3. Add redirect response with new parameters
```

### Step 4: Develop Core Time Calculation Logic
```text
1. Create timeUtils module with duration calculator
2. Add validation for UNIX timestamps
3. Implement HH:MM:SS formatting function
```

### Step 5: Implement Visual Status Indicators
```text
1. Modify HTML template to include color codes
2. Add conditional rendering based on duration
3. Integrate CSS styling for status circles
```

### Step 6: Handle Missing Parameters
```text
1. Add parameter validation middleware
2. Implement fallback to current timestamp
3. Create warning message component
```

### Step 7: Validate Timestamp Integrity
```text
1. Add timestamp validation checks
2. Implement epoch time reset handler
3. Create error state UI components
```

### Step 8: Address Stale Data Scenarios
```text
1. Add last-updated timestamp comparison
2. Implement 48-hour threshold check
3. Create stale data warning banner
```

### Step 9: Ensure Frame Compatibility
```text
1. Add user-agent detection middleware
2. Create text-only template variant
3. Implement OG meta tag fallbacks
```

### Step 10: Final Integration Testing
```text
1. Create end-to-end test cases
2. Verify parameter persistence chain
3. Validate all error state transitions
```

This breakdown follows the 2-4 file change constraint per step, with each step building on previous implementations. Steps progress from core infrastructure (1-3) to business logic (4-5), error handling (6-8), and finally compatibility/testing (9-10). Later steps reference earlier implementations through shared utilities (timeUtils), middleware patterns, and template components.