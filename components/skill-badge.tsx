import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  level?: "beginner" | "intermediate" | "advanced"
}

export function SkillBadge({ name, icon, level }: SkillBadgeProps) {
  return (
    <Badge 
      variant="secondary" 
      className="mr-2 mb-2 text-sm font-medium px-3 py-1 hover:bg-secondary/80 transition-colors"
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {name}
      {level && (
        <span className="ml-1.5 text-xs text-muted-foreground">
          • {level}
        </span>
      )}
    </Badge>
  )
}

