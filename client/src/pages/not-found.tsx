import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold light:text-gray-900 dark:text-[#e2a42c]">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-gray-600 dark:text-white">
            Have the mists entranced you, Weary Traveler?
          </p>
          <Link href="/">
              <button className="w-full flex bg-emerald dark:bg-emerald dark:hover:bg-emerald-600 my-5 px-4 py-2 rounded-lg font-cinzel transition-all items-center justify-center">
                Return Home
              </button>
            </Link>
        </CardContent>
      </Card>
    </div>
  );
}
