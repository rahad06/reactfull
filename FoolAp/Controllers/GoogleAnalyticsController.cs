using Google.Apis.AnalyticsReporting.v4;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FoolAp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GoogleAnalyticsController : ControllerBase
{
    private readonly string _viewId = "G-P9P5RGHH3X"; // Replace with your Google Analytics view ID

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Google.Apis.AnalyticsReporting.v4.Data.ReportData>>>
        GetAnalyticsData(string startDate, string endDate)
    {
        // Set up credentials
        var certificate =
            new X509Certificate2("path/to/certificate.p12", "password", X509KeyStorageFlags.Exportable);
        var credential = new ServiceAccountCredential(
            new ServiceAccountCredential.Initializer("client-email@project-id.iam.gserviceaccount.com")
            {
                Scopes = new[] { AnalyticsReportingService.Scope.AnalyticsReadonly }
            }.FromCertificate(certificate));

        // Set up service
        var service = new AnalyticsReportingService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
            ApplicationName = "MyProject",
        });

        // Build request
        var dateRange = new Google.Apis.AnalyticsReporting.v4.Data.DateRange
            { StartDate = startDate, EndDate = endDate };
        var sessions = new Google.Apis.AnalyticsReporting.v4.Data.Metric
            { Expression = "ga:sessions", Alias = "Sessions" };
        var reportRequest = new Google.Apis.AnalyticsReporting.v4.Data.ReportRequest
        {
            ViewId = _viewId,
            DateRanges = new List<Google.Apis.AnalyticsReporting.v4.Data.DateRange> { dateRange },
            Metrics = new List<Google.Apis.AnalyticsReporting.v4.Data.Metric> { sessions },
        };
        var analyticsReportingService = new Google.Apis.AnalyticsReporting.v4.AnalyticsReportingService(
            new BaseClientService.Initializer
            {
                HttpClientInitializer = credential,
                ApplicationName = "Your Application Name"
            });

        var batchGetRequest = await analyticsReportingService.Reports.BatchGet(
            new Google.Apis.AnalyticsReporting.v4.Data.GetReportsRequest
            {
                ReportRequests = new List<Google.Apis.AnalyticsReporting.v4.Data.ReportRequest> { reportRequest }
            }).ExecuteAsync();

        return Ok(batchGetRequest.Reports[0].Data.Rows);

    }
}

