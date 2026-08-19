import { ArrowRight } from "lucide-react"

// A clean, wrapping "How it works" process flow.
export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="How it works">
      {steps.map((step, i) => (
        <li key={step + i} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-copper" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  )
}
