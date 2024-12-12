import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-[#14141f] py-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          See how <span className="text-[#ff2ec4]">Trace</span> operationalizes Metric Trees!
        </h2>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white/20 hover:bg-white/10 gap-2"
          >
            <Play className="w-4 h-4" />
            WATCH THE VIDEO
          </Button>
          
          <Button 
            className="bg-[#6366f1] text-white hover:bg-[#6366f1]/90"
          >
            SIGN UP FOR A DEMO
          </Button>
        </div>
      </div>
    </section>
  )
}

