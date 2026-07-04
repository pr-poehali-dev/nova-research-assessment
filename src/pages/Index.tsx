import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "PhoneCall",
    title: "Вызов агента 24/7",
    description: "Круглосуточный выезд ритуального агента в любое время дня и ночи.",
  },
  {
    icon: "Flower2",
    title: "Организация похорон",
    description: "Полное сопровождение: документы, транспорт, зал прощания, венки.",
  },
  {
    icon: "Flame",
    title: "Кремация",
    description: "Достойное проведение кремации с оформлением всех необходимых бумаг.",
  },
  {
    icon: "HeartHandshake",
    title: "Товары и услуги",
    description: "Гробы, урны, памятники, венки и другие ритуальные принадлежности.",
  },
]

export default function MemorialPage() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Icon name="CheckCircle" size={64} className="text-primary mx-auto" />
              <h2 className="text-2xl font-bold text-foreground">Заявка принята</h2>
              <p className="text-muted-foreground">
                Спасибо, {name}. Наш агент свяжется с вами по номеру {phone} в ближайшее время
                и окажет всю необходимую поддержку.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                Отправить ещё одну заявку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cross" size={24} />
            <h1 className="text-2xl font-semibold">Память</h1>
          </div>
          <a
            href="tel:+78001234567"
            className="hidden md:flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Icon name="Phone" size={18} />
            <span className="font-medium">8 800 123-45-67</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-260px)] p-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Помощь в трудную <span className="text-primary">минуту</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Организация похорон и кремации «под ключ». Возьмём на себя все заботы,
              чтобы вы могли проститься с близким достойно.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-secondary">Вызвать агента</CardTitle>
              <CardDescription className="text-center">
                Оставьте заявку — перезвоним в течение нескольких минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Icon
                      name="User"
                      size={16}
                      className="absolute left-3 top-3 text-muted-foreground"
                    />
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Icon
                      name="Phone"
                      size={16}
                      className="absolute left-3 top-3 text-muted-foreground"
                    />
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Вызвать агента"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="Clock" size={16} />
              Работаем круглосуточно, без выходных
            </p>
          </div>

          {/* Services */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {services.map((service) => (
              <Card key={service.title} className="text-left">
                <CardContent className="pt-6 space-y-2">
                  <Icon name={service.icon} size={28} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 Ритуальная служба «Память». Работаем с заботой и уважением.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
