```markdown
### Core
[x] Create serverless function for tracking start  
**Validation:** HTTP 200 response for valid requests (1hr)

[ ] Generate shareable URL with encoded parameters  
**Validation:** URL contains encoded start/refresh parameters (1hr)

[ ] Create timeUtils module with duration calculator  
**Validation:** Returns correct duration between two timestamps (1hr)

[ ] Add validation for UNIX timestamps  
**Validation:** Rejects non-numeric values (1hr)

[ ] Implement fallback to current timestamp  
**Validation:** Uses now() when params missing (1hr)

[ ] Add timestamp validation checks  
**Validation:** Rejects future timestamps (1hr)

[ ] Implement epoch time reset handler  
**Validation:** Updates refresh timestamp on reset (1hr)

[ ] Add last-updated timestamp comparison  
**Validation:** Detects stale sessions (1hr)

### API
[ ] Create GET endpoint for time calculation  
**Validation:** Returns JSON with time difference (1hr)

[ ] Implement parameter parsing from URL  
**Validation:** Extracts start/refresh params (1hr)

[ ] Create POST endpoint for manual refresh  
**Validation:** Updates refresh timestamp (1hr)

[ ] Add parameter validation middleware  
**Validation:** Blocks invalid parameter formats (1hr)

[ ] Add user-agent detection middleware  
**Validation:** Identifies common embed clients (1hr)

### UI
[ ] Set up basic HTML response template  
**Validation:** Renders with placeholder values (1hr)

[ ] Modify HTML template to include color codes  
**Validation:** Shows red/yellow/green indicators (1hr)

[ ] Add conditional rendering based on duration  
**Validation:** Updates display every 15 minutes (1hr)

[ ] Create warning message component  
**Validation:** Shows when params missing (1hr)

[ ] Implement OG meta tag fallbacks  
**Validation:** Social shares show time data (1hr)

[ ] Create stale data warning banner  
**Validation:** Appears after 48h inactivity (1hr)

[ ] Validate all error state transitions  
**Validation:** Error states persist through reloads (1hr)
```

**Implementation Order:**  
1. Core infrastructure (serverless functions, validation)  
2. API endpoints (GET/POST handlers)  
3. UI components (templates, conditional logic)  
4. Cross-cutting concerns (middleware, error handling)  

**Dependency Flow:**  
- Core validations required before API parameter handling  
- HTML templates must exist before UI modifications  
- Middleware implementations depend on core validation logic  
- Final testing requires completed integration of all layers
