import { Briefcase, Code, User } from "lucide-react"

export const Aboutme = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gaps-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            Whether I am optimizing performance or animating micro-interactions,
                            my goal is always the same: deliver beautiful,
                            user-centric interfaces that make an impact.
                        </p>
                        <p className="text-muted-foreground">
                            With a strong aptitude for analytical thinking,
                            I excel at dissecting intricate problems and devising robust,
                            scalable solutions—whether optimizing application performance or architecting new features,
                            I maintain composure under pressure and consistently achieve results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">
                                            Designing intuitive user interfaces and 
                                            seamless user experiences.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground">
                                            Leading projects from conception to completion with 
                                            agile methodologies.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}