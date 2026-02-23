"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#c02927" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return null;
}
