```markdown
### Core
[x] Create serverless function for tracking start  
**Validation:** HTTP 200 response for valid requests (1hr)

[x] Generate shareable URL with encoded parameters  
**Validation:** URL contains encoded start/refresh parameters (1hr)

[x] Create timeUtils module with duration calculator  
**Validation:** Returns correct duration between two timestamps (1hr)

[x] Add validation for UNIX timestamps  
**Validation:** Rejects non-numeric values (1hr)

[x] Implement fallback to current timestamp  
**Validation:** Uses now() when params missing (1hr)

[x] Add timestamp validation checks  
**Validation:** Rejects future timestamps (1hr)

[ ] Implement epoch time reset handler  
**Validation:** Updates refresh timestamp on reset (1hr)

[ ] Add last-updated timestamp comparison  
**Validation:** Detects stale sessions (1hr)

### API
[x] Create GET endpoint for time calculation  
**Validation:** Returns JSON with time difference (1hr)

[x] Implement parameter parsing from URL  
**Validation:** Extracts start/refresh params (1hr)

[ ] Create POST endpoint for manual refresh  
**Validation:** Updates refresh timestamp (1hr)

[x] Add parameter validation middleware  
**Validation:** Blocks invalid parameter formats (1hr)

[x] Add user-agent detection middleware  
**Validation:** Identifies common embed clients (1hr)

### UI
[x] Set up basic HTML response template  
**Validation:** Renders with placeholder values (1hr)

[x] Modify HTML template to include color codes  
**Validation:** Shows red/yellow/green indicators (1hr)

[x] Add conditional rendering based on duration  
**Validation:** Updates display every 15 minutes (1hr)

[x] Create warning message component  
**Validation:** Shows when params missing (1hr)

[x] Implement OG meta tag fallbacks  
**Validation:** Social shares show time data (1hr)

[ ] Create stale data warning banner  
**Validation:** Appears after 48h inactivity (1hr)

[ ] Validate all error state transitions  
**Validation:** Error states persist through reloads (1hr)
```

**Implementation Status:**
- Core: 6/8 completed
- API: 4/5 completed  
- UI: 5/7 completed
- Overall Progress: 15/20 tasks completed (75%)

**Remaining Priority Items:**
1. Implement epoch time reset handler
2. Add last-updated timestamp comparison
3. Create POST endpoint for manual refresh
4. Create stale data warning banner
5. Validate all error state transitions

**Next Steps:**
1. Complete remaining core validations
2. Implement POST endpoint
3. Add UI warning components
4. Final integration testing
