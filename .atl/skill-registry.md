# Skill Registry — fusa-landing

## Project Conventions

- `AGENTS.md` — Project rules (Tailwind 4, shadcn/ui, no CSS legacy)
- `app/globals.css` — Design tokens y estilos globales
- `lib/utils.ts` — Utilidades compartidas

## Compact Rules

### sdd-apply
```
## SDD Apply — Implementation Phase

When implementing tasks:
- Read spec and design BEFORE writing any code
- Keep tasks small — complete one at a time
- After each task: verify implementation matches spec
- If TDD mode: write/update tests BEFORE marking done
- Report skill_resolution in return envelope
```

### sdd-spec
```
## SDD Spec — Requirements Phase

When writing specifications:
- Use Given/When/Then format for scenarios
- Apply RFC 2119 keywords (MUST, SHALL, SHOULD, MAY)
- One scenario per "When" clause
- Include rollback considerations
- Identify affected modules/packages
```

### sdd-verify
```
## SDD Verify — Validation Phase

When verifying implementation:
- Compare EVERY spec scenario against implementation
- Run tests if infrastructure exists
- Report CRITICAL / WARNING / SUGGESTION findings
- If CRITICAL issues found: do not archive
```

### sdd-propose
```
## SDD Propose — Change Proposal Phase

When creating proposals:
- Include rollback plan for risky changes
- Identify affected modules/packages
- Define success criteria clearly
```

### sdd-design
```
## SDD Design — Technical Design Phase

When creating technical designs:
- Include sequence diagrams for complex flows
- Document architecture decisions with rationale
- Reference relevant skill files if needed
```

### sdd-tasks
```
## SDD Tasks — Task Breakdown Phase

When breaking down work:
- Group tasks by phase (infrastructure, implementation, testing)
- Use hierarchical numbering (1.1, 1.2, etc.)
- Keep tasks small enough to complete in one session
- Mark dependencies between tasks
```

## User Skills (Triggers)

| Skill | Trigger | Path |
|-------|---------|------|
| sdd-apply | SDD implementation, code writing | opencode/skills/sdd-apply |
| sdd-spec | SDD specs, requirements | opencode/skills/sdd-spec |
| sdd-verify | SDD verification, validation | opencode/skills/sdd-verify |
| sdd-propose | SDD proposals, change proposals | opencode/skills/sdd-propose |
| sdd-design | SDD design, architecture | opencode/skills/sdd-design |
| sdd-tasks | SDD tasks, task breakdown | opencode/skills/sdd-tasks |
| sdd-init | SDD initialization | opencode/skills/sdd-init |
| sdd-explore | SDD exploration, investigation | opencode/skills/sdd-explore |
| sdd-onboard | SDD onboarding | opencode/skills/sdd-onboard |
| sdd-archive | SDD archive | opencode/skills/sdd-archive |
| branch-pr | PR creation, pull requests | opencode/skills/branch-pr |
| issue-creation | GitHub issues, bug reports | opencode/skills/issue-creation |
| judgment-day | Adversarial review, dual review | opencode/skills/judgment-day |
| find-skills | Finding skills, discovering capabilities | opencode/skills/find-skills |
| skill-creator | Creating new skills | opencode/skills/skill-creator |
| go-testing | Go testing, Bubbletea TUI | opencode/skills/go-testing |
| supabase | Supabase, databases, auth | opencode/skills/supabase |
| supabase-postgres-best-practices | Postgres optimization | opencode/skills/supabase-postgres-best-practices |

## Project Standards (auto-resolved)

### Fusa Landing — Tailwind 4 + shadcn/ui
```
- NO CSS legacy — 100% Tailwind utilities + shadcn/ui
- Single globals.css file for global styles
- Design tokens in globals.css with @theme inline
- Use tokenized classes: bg-background, text-foreground, border-border
- Headings: Conthrax font, Body: Inter font
- Brand colors: Fusa Black (#050505), Fusa White (#FDFDFD), Fusa Indigo (#1C058E)
```
